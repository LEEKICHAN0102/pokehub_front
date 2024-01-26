import styled from "styled-components";

export default function ImagePreview({ images }) {
  return (
    <>
      {images.map((image, index) => (
        <Preview key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
      ))}
    </>
  );
}

const Preview = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px 0px;
`;
