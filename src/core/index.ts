
export enum SquareType {
  'event',
  'choice',
  'empty'
}
export type Effect = {
  education?: number;
  happiness?: number;
  wealth?: number;
  health?: number;
  family?: number;
  beauty?: number;
}


type Stat = keyof Effect;
const stats: Stat[] = ['education', 'happiness', 'wealth', 'health', 'family', 'beauty'];


interface BaseSquare {
  id: number;
  type: string;
  description: string;
}

interface EventSquare extends BaseSquare {
  type: 'event';
  effect: Effect;
}

interface ChoiceOption {
  text: string;
  effect: Effect;
}

interface ChoiceSquare extends BaseSquare {
  type: 'choice';
  options: ChoiceOption[];
}

interface EmptySquare extends BaseSquare {
  type: 'empty';
  text?: string;
}

export type Square = EventSquare | ChoiceSquare | EmptySquare;

export type OdysseyData = {
  squares: Square[];
  girl?: Girl;
};

export function isValidSquare(square: any): square is Square {
  if (typeof square.id !== 'number' || typeof square.type !== 'string' || typeof square.description !== 'string') {
    return false;
  }

  switch (square.type) {
    case 'event':
      return typeof square.effect === 'object';
    case 'choice':
      return Array.isArray(square.options) && square.options.every((option: any) =>
        typeof option.text === 'string' && typeof option.effect === 'object'
      );
    case 'empty':
      return true;
    default:
      return false;
  }
}

class Girl {
  name: string;
  age: number = 0;

  // 全是外在的
  education: number = 0;
  happiness: number = 0;
  health: number = 0;
  wealth: number = 0;
  beauty: number = 0;
  family: number = 0;

  // ？个人品质

  constructor (name: string) {
    this.name = name;
  }

  updateStats(effect: Effect) {
    (Object.keys(effect) as Stat[]).forEach(stat => {
      if (effect[stat] !== undefined) {
        this[stat] += effect[stat]!;
      }
    });
  }

}

class EventStrategy {
  execute(girl: Girl, data: EventSquare): string {
    console.log(`事件：${ data.description }`);

    girl.updateStats(data.effect);
    return `${ girl.name } ${ data.description }。效果：${ JSON.stringify(data.effect) }`;
  }
}

class ChoiceStrategy {
  execute(girl: Girl, data: ChoiceSquare, choice?: number): string {

    console.log(`选择：${ data.description } ${ data.options[choice!].text }`);
    const choiceOption = data.options[choice!];
    girl.updateStats(choiceOption.effect);
    return `${ girl.name } 选择了 ${ choiceOption.text }。效果：${ JSON.stringify(choiceOption.effect) }`;
  }
}

class EmptyStrategy {
  execute(girl: Girl, data: EmptySquare): string {
    return `${ girl.name }${ data.text || "在空白格上休息了一回合。" }`;
  }
}

class SquareContext {
  private strategies: { [key: string]: EventStrategy | ChoiceStrategy | EmptyStrategy };

  constructor () {
    this.strategies = {
      'event': new EventStrategy(),
      'choice': new ChoiceStrategy(),
      'empty': new EmptyStrategy()
    };
  }

  executeStrategy(type: Square['type'], girl: Girl, data: Square, choice?: number): string {

    if (type === 'choice' && choice === undefined) {
      throw new Error('需要选择一个选项');
    }

    return this.strategies[type].execute(girl, data as any, choice);
  }
}

class Odyssey {
  girl: Girl;
  squareContext: SquareContext;
  currentPosition: number;
  board: Square[];

  constructor (odysseyData: OdysseyData) {
    this.girl = new Girl("Rita");
    this.board = odysseyData.squares;
    this.squareContext = new SquareContext();
    this.currentPosition = 0;
  }

  move(choice?: number): string {
    if (this.currentPosition >= this.board.length) {
      throw new Error('游戏结束');
    }

    const currentSquare = this.board[this.currentPosition];
    console.log(`当前位置：${ this.currentPosition }`);
    const result = this.squareContext.executeStrategy(
      currentSquare.type,
      this.girl,
      currentSquare,
      choice
    );

    return result
  }

}

export {
  Odyssey,
  Girl
}
