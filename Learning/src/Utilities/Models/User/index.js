import { saveToAsyncStorage } from "../../asyncstorage";
import { AsyncStorage } from "react-native";
import { consumePostAPI, consumeGetAPI } from "../../serverrequest";
import { subscriptionKey, apiVersion, contentType } from "../../constants";
export default class User {
  constructor(response) {
    if (response != null) {
      console.log('aya')
      if (response.user) {
        this.accessToken = response.access_token;
        this.firstName = response.user.firstname;
        this.lastName = response.user.lastName;
        this.email = response.user.email;
        this.userGuid = response.user.userGuid;
        response.teamInformation.forEach(dct => {
          if (dct.isDomestic) {
            this.domesticTeamId = dct.teamId;
            this.domesticTeamName = dct.teamName;
            this.domesticTeamIconUrl = dct.teamIconUrl;
            if (dct.teamStickers.length > 0) {
              this.stickerUrl = dct.teamStickers[0].stickerUrl;
            }
          } else {
            this.internationalTeamId = dct.teamId;
            this.internationalTeamName = dct.teamName;
            this.internationalTeamIconUrl = dct.teamIconUrl;
          }
        });
      } else {
        this.accessToken = response.accessToken;
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.email = response.email;
        this.userGuid = response.userGuid;
        this.domesticTeamId = response.teamId;
        this.domesticTeamName = response.teamName;
        this.domesticTeamIconUrl = response.teamIconUrl;
        this.internationalTeamId = response.teamId;
        this.internationalTeamName = response.teamName;
        this.internationalTeamIconUrl = response.teamIconUrl;
        this.stickerUrl = response.stickerUrl;
      }
    }
  }
  loginUser = async (email, password) => {
    const url =
      "https://footballalbum-prod-api.imfootball.me/UserAPI/api/Auth/Login";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": contentType,
      "ZUMO-API-VERSION": apiVersion,
      "Ocp-Apim-Subscription-Key": subscriptionKey
    };
    // Body params to attach with Request
    const loginParams = {
      email: email,
      password: password
    };
    const response = await consumePostAPI(url, loginParams, headerParams);
    return response;
  };

  async getFriendList(successCallback, errorCallback) {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    const url =
      "https://footballalbum-prod-api.imfootball.me//UserAPI/api/User/FriendList";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": contentType,
      "ZUMO-API-VERSION": apiVersion,
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-ZUMO-AUTH": user.accessToken
    };
    consumeGetAPI(
      url,
      headerParams,
      response => {
        successCallback(response);
      },
      error => {
        errorCallback(error);
      }
    );
  }

  async removeFriend(userGUID, successCallback, errorCallback) {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    const url =
      "https://footballalbum-prod-api.imfootball.me//UserAPI/api/Recommendation/UpdateRecommendationStatus";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": contentType,
      "ZUMO-API-VERSION": apiVersion,
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-ZUMO-AUTH": user.accessToken
    };
    const parms = [
      {
        recommendationStatusTypeId: "2",
        userGuid: userGUID
      }
    ];
    consumePostAPI(
      url,
      headerParams,
      parms,
      response => {
        successCallback(response);
      },
      error => {
        errorCallback(error);
      }
    );
  }
}
