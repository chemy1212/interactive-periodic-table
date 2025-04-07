
import React from 'react';

export default function ElementInfo({ element }) {
  if (!element) return <div className="info">원소를 클릭하세요</div>;

  return (
    <div className="info">
      <h2>{element.name} ({element.symbol})</h2>
      <p>원자번호: {element.number}</p>
      <p>주기: {element.period}, 족: {element.group}</p>
      <p>분류: {element.category}</p>
      {element.videoUrl && (
        <p>
          <a href={element.videoUrl} target="_blank" rel="noopener noreferrer">
            관련 영상 보기
          </a>
        </p>
      )}
    </div>
  );
}
