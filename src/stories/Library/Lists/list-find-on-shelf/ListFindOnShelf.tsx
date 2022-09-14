export type ListFindOnShelfProps = {
  manifestationName: string;
  location: string;
  nrAvailable: number;
  nrOfListItems: number;
};

const ListFindOnShelf: React.FC<ListFindOnShelfProps> = ({
  manifestationName,
  location,
  nrAvailable,
  nrOfListItems,
}) => {
  const numberArray = new Array(nrOfListItems).fill("item");

  return (
    <ul className="find-on-shelf">
      <li className="find-on-shelf__header-row text-small-caption">
        <span className="find-on-shelf__material-title">Materiale</span>
        <span>Find det på hylden</span>
        <span className="find-on-shelf__item-count-title">Hjemme</span>
      </li>
      {numberArray.map((key) => {
        return (
          <li className="find-on-shelf__row text-body-medium-regular" key={key}>
            <span className="find-on-shelf__material-title">
              {manifestationName}
            </span>
            <span>{location}</span>
            <span>
              {nrAvailable}
              <span className="hide-on-desktop"> hjemme</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListFindOnShelf;
