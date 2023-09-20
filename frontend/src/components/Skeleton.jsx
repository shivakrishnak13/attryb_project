import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Skeleton = ({ width, height, borderradius }) => {
  return (
    <SKELETON width={width} height={height} borderradius={borderradius}>
      <div className="skeleton-item"></div>
    </SKELETON>
  );
};

export default Skeleton;



const SKELETON = styled.div`
 
  .skeleton-item {
    width: ${({ width }) => (width ? width : "200px")};
    height: ${({ height }) => (height ? height : "20px")};
    margin-bottom: 10px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: ${({ borderradius }) => (borderradius ? borderradius : "4px")};
    animation: ${shimmer} 5s linear infinite; /* Apply the shimmer effect */
  }
`;
