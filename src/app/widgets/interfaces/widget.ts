export enum WidgetType {
  IMG,
  TEXT,
  HELLO
}


export interface ImgWidget {
  type: WidgetType.IMG,
  src: string
}

export interface TextWidget {
  type: WidgetType.TEXT,
  text: string
}

export interface HelloWidget {
  type: WidgetType.HELLO,
}

export type Widgets = ImgWidget | TextWidget | HelloWidget

