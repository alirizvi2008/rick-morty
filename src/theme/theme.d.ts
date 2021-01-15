import 'styled-components';

export interface MyTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    subText: string;
    link: string;
    linkHover: string;
}

declare module 'styled-components' {
    export interface DefaultTheme extends MyTheme { }
}