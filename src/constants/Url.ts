import setting from "../../public/setting.json";

/**
 * Url定数
 * REST APIのURLだけは設定ファイルから読み込む
 */
export default class UrlConstants {
  /** アプリURL 基底URL */
  public static readonly root: string = "/";
  /** ダッシュボード */
  public static readonly dashboard: string = "/dashboard";
  /** トップ */
  public static readonly top: string = "/top";
  /** ユーザー */
  public static readonly user: string = "/user";
  /** 勤怠入力 */
  public static readonly worktime: string = "/worktime";

  /** REST API 基底URL */
  public static readonly restBase: string = setting.url.restUrl;
  /** ログイン */
  public static readonly restLogin: string = "/login";
  /** ユーザー */
  public static readonly restUser: string = "/user";
}
