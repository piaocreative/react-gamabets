export const updateFirebaseToken = "nnData/firebaseUpdate";
export const verifyMobile = "api/user/verifyMobile";
export const getOtp = "api/user/sendOTP";
export const registerUser = "api/user/register";
export const getUsername = "recovery/getUsername";
export const getForgotPasswordOtp = "recovery/sendOTP";
export const verifyOtp = "recovery/verifyOTP";
export const resetPassword = "recovery/resetPassword";
export const loginUser = "api/user/login";
export const resetMPIN = "recovery/mpinReset";
export const loginWithMpin = "api/user/mpinLogin";
export const deviceChange = "api/user/deviceChnage";
export const userWalletBalance = "nnData/getBal";
export const getNotificationCounter = "nnData/notiCounter";
export const walletContact = "htp/walletContact";
export const appNotificationOnOff = "nnData/appNotification";
export const dashboardGamesList = "result/gameResultTest";
export const getStarLineGameList = "result/starLineResultTest";
export const kuberJackpotGameData = "result/ABgameResultTest";
export const starlineGameType = "gameTypes/starLineGameType";
export const jackpotGameType = "gameTypes/ABgameGameType";
export const howToPlayData = "htp";
export const submitDashboardBid = "Bids/game_bids";
export const submitStarlineBid = "Bids/starLineBids";
export const submitJackpotBid = "Bids/abBids";
export const dashboardGameID = "gameTypes/gameType";
export const getDayGameBids = "result/daysGameBids";
export const getDaySession = "result/daySession";
export const getTranscationHistoryPaginatin = "nnData/walletHistoryPaginatoion";
export const notificationData = "nnData/notification";
export const gameRates = "nnData/gameRates";
export const profileNote = "htp/profileNote";
export const profileData = "profile/userProfile";
export const checkIFSC = "{ifcs}";
export const updateProfileBankDetail = "profile/bankdetails";
export const updateProfileContactDetail = "profile/phoneNumber";
export const setMpin = "MPIN/setMpin";
export const sendMpinOTP = "MPIN";
export const changeMpin = "MPIN/changeMpin";
export const getFilterList = "bidsHistory/providers";
export const jackpotResultHistory = "history/andarBaharRequestHistory";
export const starlineResultHistory = "history/starlineHistory";
export const getBidFilterList = "bidsHistory/gameBidsFilter";
export const getJackpotFilterList = "bidsHistory/abBidsFilter";
export const getStalineFilterList = "bidsHistory/stalineBidsFilter";
export const getBidHistoryPaginatin = "bidsHistory/gameBidsPagination";
export const getStarlineBidHistoryPaginatin =
  "bidsHistory/stalineBidsPagination";
export const getJackportBidHistoryPaginatin = "bidsHistory/abBidsPagination";
export const getFundHistoryPaginatin = "history/fundHistoryPagination";
export const getCreditHistoryPaginatin = "history/creditHistoryPagination";
export const getDebitHistoryPaginatin = "history/debitHistoryPagination";
export const withdrawText = "fundreq/withdrawText";
export const requestWithdrawFund = "fundreq/withdrawFund";
export const getMinMaxFunding = "nnData/walletMinMax";
export const getUPI = "fundreq/idsUpi";
export const autoPaymentUpi = "fundreq/newAutoPaymentUpi";
export const addPaymentOnline = "fundreq/addPaymentOnline";
export const getOldMessages = "usersOldMessage";
export const getBroadCast = "oldBroadcastList";
export const uploadMediaFile = "sendImageAndroid/upload";
export const userLogout = "api/user/logout";
export const getPaymentMode = "nnData/allMode";

interface UpdateFirebaseTokenResponse {
  id: string;
}
interface UpdateFirebaseTokenRequest {
  id: string;
}

class ApiBase {
  baseUrl: string;
  fetchApi: (url: RequestInfo, init: RequestInit) => Promise<Response>;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    this.fetchApi = async (url: RequestInfo, init: RequestInit) =>
      fetch(`${baseUrl}/${url}`, {
        ...init,
      });
  }
  get = async <TResponse>(url: string): Promise<TResponse> => {
    const res = await this.fetchApi(url, { method: "get" });
    const data = await res.json();
    return data as TResponse;
  };
  post = async <TRequest, TResponse>(
    url: string,
    data: TRequest
  ): Promise<TResponse> => {
    const res = await this.fetchApi(url, {
      method: "post",
      body: JSON.stringify(data),
    });
    const a = await res.json();
    return a as TResponse;
  };
}

// export default class AppsApi extends ApiBase {
//   updateFirebaseToken = async (
//     request: UpdateFirebaseTokenRequest
//   ): Promise<UpdateFirebaseTokenResponse> => {
//     return this.fetchApi("/hello", {});
//     return { id: "test" };
//   };
// }

// const api = new AppsApi("http://localhost:5000");
