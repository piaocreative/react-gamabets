import { getLS, AUTH_TOKEN, DEVICE_ID } from "../lib/commons";

export const updateFirebaseToken = "nnData/firebaseUpdate";
export const verifyMobile = "api/user/verifyMobile";
export const getOtp = "api/user/sendOTP";
export const registerUser = "api/user/register";
export const getUsername = "recovery/getUsername";
export const getForgotPasswordOtp = "recovery/sendOTP";
export const verifyOtp = "recovery/verifyOTP";
export const verify = "api/user/verify";
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
export const star_game_pattern = "gameTypes/star_game_pattern";
/**
 *  const token = req.header('auth-token');
    const device_id = req.header('Authorization');
 */

class AppsApi {
  getApi;
  postApi;
  baseUrl;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.initSetup();
  }

  initSetup = () => {
    this.getApi = (url) =>
      fetch(`${this.baseUrl}/${url}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
          "auth-token": getLS(AUTH_TOKEN),
          Authorization: getLS(DEVICE_ID),
        },
      }).then((r) => {
        const headerReq = {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
            "auth-token": getLS(AUTH_TOKEN),
            Authorization: getLS(DEVICE_ID),
          },
        }
        console.log(`GET   ${this.baseUrl}/${url}`);
        console.log(headerReq);
        return r.json();
      });
    // this.getApi = (url) => {
    //   const headerReq = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
    //       "auth-token": getLS(AUTH_TOKEN),
    //       Authorization: getLS(DEVICE_ID),
    //     },
    //   }
    //   console.log(`getApi   ${this.baseUrl}/${url}`);
    //   console.log(headerReq);
    //   return {};
    // }
    this.postApi = (url, data) =>
      fetch(`${this.baseUrl}/${url}`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
          "auth-token": getLS(AUTH_TOKEN),
          Authorization: getLS(DEVICE_ID),
        },
      }).then((r) => {
        const headerReq = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
            "auth-token": getLS(AUTH_TOKEN),
            Authorization: getLS(DEVICE_ID),
          },
        };
        console.log(`POST   ${this.baseUrl}/${url}`);
        console.log({...headerReq, body: data});
        return r.json();
      });
    // this.postApi = (url, data) => {
    //   const headerReq = {
    //     method: "post",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
    //       "auth-token": getLS(AUTH_TOKEN),
    //       Authorization: getLS(DEVICE_ID),
    //     }
    //   }
    //   console.log(`postApi   ${this.baseUrl}/${url}`);
    //   console.log(headerReq);
    //   return {};
    // };
  };
  withdrawText = () => {
    return this.postApi(withdrawText, {});
  };
  requestWithdrawFund = (data) => {
    return this.postApi(requestWithdrawFund, data)
  }
  star_game_pattern = () => {
    return this.getApi(star_game_pattern);
  };
  updateFirebaseToken = ({ deviceId, appVersion, token }) => {
    return this.postApi(updateFirebaseToken, { deviceId, appVersion, token });
  };
  verifyMobile = ({ mobile, deviceId }) => {
    return this.postApi(verifyMobile, { mobile, deviceId });
  };
  getOtp = ({ mobile, reqType = 1 }) => {
    return this.postApi(getOtp, { mobile, reqType });
  };
  registerUser = ({
    username,
    mobile,
    deviceVeriOTP,
    mpin,
    name,
    firebaseId,
    deviceName,
    deviceId,
    password,
  }) => {
    return this.postApi(registerUser, {
      username,
      mobile,
      deviceVeriOTP,
      mpin,
      name,
      firebaseId,
      deviceName,
      deviceId,
      password,
    });
  };
  profileData = ({ id }) => {
    return this.postApi(profileData, { id });
  };
  /**
   *
   * @param {mobile} Mobile include country code
   * @returns
   */
  getUsername = ({ mobile }) => {
    return this.postApi(getUsername, { mobile });
  };
  getForgotPasswordOtp = ({ }) => {
    return this.postApi(getForgotPasswordOtp, {});
  };
  verifyOtp = ({ mobile, otp }) => {
    return this.postApi(verify, { mobile, otp });
  };
  resetPassword = ({ }) => {
    return this.postApi(resetPassword, {});
  };
  loginUser = ({ username, password, deviceId }) => {
    return this.postApi(loginUser, { username, password, deviceId });
  };
  resetMPIN = ({ }) => {
    return this.postApi(resetMPIN, {});
  };
  loginWithMpin = ({ mpin, deviceId }) => {
    return this.postApi(loginWithMpin, { mpin, deviceId });
  };
  deviceChange = ({ }) => {
    return this.postApi(deviceChange, {});
  };
  userWalletBalance = ({ userId }) => {
    return this.postApi(userWalletBalance, { id: userId });
  };
  getNotificationCounter = ({ id }) => {
    return this.postApi(getNotificationCounter, { id });
  };
  walletContact = ({ }) => {
    return this.postApi(walletContact, {});
  };
  appNotificationOnOff = ({ }) => {
    return this.postApi(appNotificationOnOff, {});
  };
  dashboardGamesList = ({ }) => {
    return this.getApi(dashboardGamesList, {});
  };

  getStarLineGameList = ({ }) => {
    return this.postApi(getStarLineGameList, {});
  };

  kuberJackpotGameData = ({ }) => {
    return this.postApi(kuberJackpotGameData, {});
  };

  starlineGameType = ({ }) => {
    return this.postApi(starlineGameType, {});
  };

  jackpotGameType = ({ }) => {
    return this.postApi(jackpotGameType, {});
  };
  howToPlayData = ({ }) => {
    return this.postApi(howToPlayData, {});
  };
  submitDashboardBid = ({
    userId,
    bidSum,
    providerId,
    gameDate,
    gameSession,
    bidData = [],
  }) => {
    return this.postApi(submitDashboardBid, {
      userId,
      bidSum,
      providerId,
      gameDate,
      gameSession,
      bidData,
    });
  };
  submitStarlineBid = ({ }) => {
    return this.postApi(submitStarlineBid, {});
  };
  submitJackpotBid = ({ }) => {
    return this.postApi(submitJackpotBid, {});
  };
  dashboardGameID = ({ }) => {
    return this.getApi(dashboardGameID, {});
  };
  getDayGameBids = ({ providerId }) => {
    return this.postApi(getDayGameBids, { providerId });
  };
  getDaySession = ({ providerId, gameDay }) => {
    return this.postApi(getDaySession, { providerId, gameDay });
  };
  getTranscationHistoryPaginatin = ({ }) => {
    return this.postApi(getTranscationHistoryPaginatin, {});
  };
}

const appsApi = new AppsApi(process.env.NEXT_PUBLIC_API_BASE);
export default appsApi;
