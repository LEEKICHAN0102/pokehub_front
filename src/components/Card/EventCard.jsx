import Title from "../Title";
import { EventContainer, EventCardContainer, EventImg, EventTitle, EventInfo, MoreInfo, InfoText } from "./event.style";
import { Link } from "react-router-dom";
import useEventData from "../../hooks/event/useEventData";
import Loader from "../Loader";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function EventCard() {
  const { data, isLoading } = useEventData();

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <Title name="이벤트" />
      <EventContainer>
        {data.event.map((event, index) => (
          <Link key={index} to={event.link} target="_blank" rel="noopener noreferrer">
            <EventCardContainer>
              <EventImg src={`${event.imageUrl}`} alt={`${event.title}`} />
              <EventTitle>{event.title}</EventTitle>
              <EventInfo>
                <span>{event.sprite}</span>
                <span>{event.date}</span>
              </EventInfo>
            </EventCardContainer>
          </Link>
        ))}
      </EventContainer>
      <MoreInfo>
        <InfoText href={"https://pokemonkorea.co.kr/"} target="_blank" rel="noopener noreferrer" >
            <span>더 많은 정보를 보고 싶다면?</span>
            <FaLongArrowAltRight size={24} />
        </InfoText>
      </MoreInfo>
    </>
  );
}
