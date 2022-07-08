import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { Button } from "../button/Button";
import DetailsList, { ListData } from "../details-list/DetailsList";
import { Material } from "../material/Material";

export type MaterialMainfestationItemProps = {
  title: string;
  author: string;
  year: string;
  detailsData: ListData;
};


export const MaterialMainfestationItem = ({
  title,
  author,
  year,
  detailsData
}: MaterialMainfestationItemProps) => {
  return (
    <div className="material-manifestation-item">
      <div className="material-manifestation-item__availability">
        <AvailabilityLabel
          manifestation="Bog"
          availability="Hjemme"
          status="available"
        />
      </div>
      <div className="material-manifestation-item__cover">
        <Material
          url="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>

      <div className="material-manifestation-item__text">
        <h2 className="material-manifestation-item__text__title text-header-h4">
          {title}
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
        <div className="material-manifestation-item__text__details expanded">
          <p className="link-tag text-small-caption">Detaljer om materialet </p>
          <img src="icons/collection/ExpandMore.svg" alt="ExpandMore" />
        </div>
        <DetailsList className="mt-24" data={detailsData} />
      </div>

      <div className="material-manifestation-item__reserve">
        <Button
          label="RESERVER"
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
        <span className="link-tag text-small-caption material-manifestation-item__reserve__find">
          Find på hylden
        </span>
      </div>
    </div>
  );
};