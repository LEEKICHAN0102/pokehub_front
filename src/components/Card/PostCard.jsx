import Title from "../Title";
import { PostContainer, PostCardContainer, PostThumb, PostTitle, PostInfo  } from "./postcard.style";
// import Pagination from "react-js-pagination";
// import "../../styles/Paging.css";
import ThumbLogo from "../../assets/Loading/pokehubLogo.png";
import usePostData from "../../hooks/post/usePostData";
import Loader from "../Loader";
import { Link } from "react-router-dom";

export default function PostCard() {
  const { data, isLoading } = usePostData();

  if(isLoading){
    return <Loader />
  };

  console.log(data);

  return(
    <>
      <Title name="게시글" hasButton="글 작성" />
      <PostContainer>
        {data.posting.map((posting) => (
          <Link to={`/board/${posting._id}`} key={posting._id} >
            <PostCardContainer>
              <PostThumb src={`${ThumbLogo}`} />
              <PostTitle>{posting.title}</PostTitle>
              <PostInfo>
                <span>작성자: {posting.username}</span>
                <span>게시: {posting.postingTime}</span>
              </PostInfo>
            </PostCardContainer>
          </Link>
        ))}
      </PostContainer>
      {/* <Pagination
        activePage
        itemsCountPerPage={20}
        totalItemsCount
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange
      /> */}
    </>
  )
}