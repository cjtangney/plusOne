/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HeroGrid {
    }
    interface HeroRow {
        "gamesBanned": number;
        "gamesPlayed": number;
        "gamesWon": number;
        "heroName": string;
    }
    interface SiteLoader {
        "markup": any;
    }
}
declare global {
    interface HTMLHeroGridElement extends Components.HeroGrid, HTMLStencilElement {
    }
    var HTMLHeroGridElement: {
        prototype: HTMLHeroGridElement;
        new (): HTMLHeroGridElement;
    };
    interface HTMLHeroRowElement extends Components.HeroRow, HTMLStencilElement {
    }
    var HTMLHeroRowElement: {
        prototype: HTMLHeroRowElement;
        new (): HTMLHeroRowElement;
    };
    interface HTMLSiteLoaderElement extends Components.SiteLoader, HTMLStencilElement {
    }
    var HTMLSiteLoaderElement: {
        prototype: HTMLSiteLoaderElement;
        new (): HTMLSiteLoaderElement;
    };
    interface HTMLElementTagNameMap {
        "hero-grid": HTMLHeroGridElement;
        "hero-row": HTMLHeroRowElement;
        "site-loader": HTMLSiteLoaderElement;
    }
}
declare namespace LocalJSX {
    interface HeroGrid {
    }
    interface HeroRow {
        "gamesBanned"?: number;
        "gamesPlayed"?: number;
        "gamesWon"?: number;
        "heroName"?: string;
    }
    interface SiteLoader {
        "markup"?: any;
    }
    interface IntrinsicElements {
        "hero-grid": HeroGrid;
        "hero-row": HeroRow;
        "site-loader": SiteLoader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hero-grid": LocalJSX.HeroGrid & JSXBase.HTMLAttributes<HTMLHeroGridElement>;
            "hero-row": LocalJSX.HeroRow & JSXBase.HTMLAttributes<HTMLHeroRowElement>;
            "site-loader": LocalJSX.SiteLoader & JSXBase.HTMLAttributes<HTMLSiteLoaderElement>;
        }
    }
}
