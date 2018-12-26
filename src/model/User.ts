/**
 * ユーザー
 */
export default class User {
  /** ユーザーを一意に特定するID */
  public id: string = "";
  /** 氏名 */
  public name: string = "";
  /** 年齢 */
  public age?: number = undefined;
  /** 性別 */
  public sex?: number = undefined;
  /** 権限 */
  public role: any = 0;
}
