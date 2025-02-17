function simplifyObject(webcastObject) {
    if (webcastObject.questionDetails) {
        Object.assign(webcastObject, webcastObject.questionDetails);
        delete webcastObject.questionDetails;
    }

    if (webcastObject.user) {
        Object.assign(webcastObject, getUserAttributes(webcastObject.user));
        delete webcastObject.user;
    }

    if (webcastObject.giftJson) {
        webcastObject.gift = JSON.parse(webcastObject.giftJson);
        webcastObject.giftId = webcastObject.gift.gift_id;
        delete webcastObject.giftJson;
    }

    if (webcastObject.event) {
        Object.assign(webcastObject, webcastObject.event);
        delete webcastObject.event;
    }

    if (webcastObject.eventDetails) {
        Object.assign(webcastObject, webcastObject.eventDetails);
        delete webcastObject.eventDetails;
    }

    return Object.assign({}, webcastObject);
}

function getUserAttributes(webcastUser) {
    return {
        userId: webcastUser.userId.toString(),
        uniqueId: webcastUser.uniqueId,
        nickname: webcastUser.nickname,
        profilePictureUrl: webcastUser.profilePicture.urls[2],
    };
}

module.exports = {
    simplifyObject,
};
