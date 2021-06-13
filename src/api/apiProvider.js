export const getAllUserErcFormat = (address) => {
  return `/user/${address}/formatByNft`;
};

export const getAllUserErc = (address) => {
  return `/user/${address}/all`;
};

export const getAllOrderListFormat = () => {
  return `/sellOrder/formatByNft`;
};

export const getavailableSellOrderERC721 = () => {
  return `/sellOrder/availableSellOrderERC721`;
};

export const getAllOrderListOfUser = (address) => {
  return `/sellOrder/user/${address}`;
};