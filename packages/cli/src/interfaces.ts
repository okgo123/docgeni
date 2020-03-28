export interface NavItem {
    /* Title of Nav */
    title: string;
    /** 别名 */
    alias: string;
    /** 路径 url */
    path: string;
    /** 图标 */
    icon?: string;
    /** 子文档 */
    children?: NavItem[];
}

export interface Locale {
    key: string;
    name: string;
}

export interface Library {
    name: string;
    rootPath: string;
}

export interface DocgConfig {
    /* Title of documentation */
    title: string;
    /* Description of documentation */
    description: string;
    /* Docs folder */
    docsPath: string;
    /* Angular docs site app path */
    sitePath: string;
    /* Components folder */
    // componentsFolder: string[];
    libs: Library[];
    /* Output folder */
    output?: string;
    /* Navigations for menu and nav */
    navs?: NavItem[];
    /** 覆盖自动生成的导航 */
    navsCover: boolean;
    /* In silent mode, log messages aren't logged in the console */
    silent: boolean;
    /** Locales */
    locales: Locale[];
}

export const DEFAULT_CONFIG: Partial<DocgConfig> = {
    title: 'Doc Generator',
    silent: false,
    docsPath: 'docs',
    sitePath: 'site',
    output: 'docs-built',
    locales: [
        {
            key: 'en-us',
            name: 'EN'
        },
        {
            key: 'zh-cn',
            name: '中文'
        }
    ]
};
