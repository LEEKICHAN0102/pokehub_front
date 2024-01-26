import Title from "../Title";
import { PostContainer, PostCardContainer, PostThumb, PostTitle, PostInfo  } from "./postcard.style";
import Pagination from "react-js-pagination";
import "../../styles/Paging.css";

export default function PostCard() {
  const e = [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return(
    <>
      <Title name="게시글" />
      <PostContainer>
        {e.map((e,i) => (
          <PostCardContainer>
            <PostThumb  />
            <PostTitle>제목 너무 길면 끊어서 출력</PostTitle>
            <PostInfo>
              <span>작성자 이름</span>
              <span>게시 날짜</span>
            </PostInfo>
          </PostCardContainer>
        ))}
      </PostContainer>
      <Pagination
        activePage
        itemsCountPerPage={20}
        totalItemsCount
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange
      />
    </>
  )
}