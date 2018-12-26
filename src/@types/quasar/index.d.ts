// quasarをtsで書くと、定義が無くてエラーになる部分があるため、定義を追加して対応。
// tsconfigのtypesに"src/@types"を追記することで、このファイルが読み込まれる。
declare module "quasar-framework/icons/fontawesome";
declare module "quasar-framework/i18n/ja";
declare module "quasar";
declare const __THEME: any;