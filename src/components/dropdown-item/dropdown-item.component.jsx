import {
  ItemContainer,
  ImageContainer,
  ItemInfo,
  ItemName,
  ItemPQ,
} from "./dropdown-item.styles";

const DropdownItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <ItemContainer>
      <ImageContainer src={imageUrl} />
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemPQ>
          {quantity} X Rs.{price}
        </ItemPQ>
      </ItemInfo>
    </ItemContainer>
  );
};

export default DropdownItem;
