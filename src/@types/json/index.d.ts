/**
 * ECMAScriptでは、jsonファイルをrequireで読込むと警告が出る
 * そのため、importでjsonファイルを読込めるように型定義をしておく
 */
declare module "*.json" {
  // jsonファイルの中は全てanyにして、どんなjsonでも読込めるようにする
  const value: any;
  export default value;
}
