import Title from "../Title";
import { PostContainer, PostCardContainer, PostThumb, PostTitle, PostInfo  } from "./postcard.style";
import Pagination from "react-js-pagination";
import "../../styles/Paging.css";
import ThumbLogo from "../../assets/Loading/pokehubLogo.png";
import usePostData from "../../hooks/post/usePostData";
import Loader from "../Loader";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PostCard() {
  const { page } = useParams();
  const { data, isLoading } = usePostData(page);
  const totalPages = Math.ceil(data.totalCount / 20);
  const pageRange = Math.min(totalPages, 5);
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    navigate(`/board/${newPage}`);
  };

  if(isLoading){
    return <Loader />
  };

  return(
    <>
      <Title name="게시글" hasButton="글 작성" />
      <PostContainer>
        {data.posting.map((posting) => (
          <Link to={`/board/detail/${posting._id}`} key={posting._id} >
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
      <Pagination
        activePage={parseInt(page)}
        itemsCountPerPage={20}
        totalItemsCount={data.totalCount}
        pageRangeDisplayed={pageRange}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  )
}