import styled from '@emotion/styled'

export const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

export const Homepage = styled.div`
  grid-column: span 2;

  .chakra-stat {
    padding-inline-start: 0rem !important;
    padding-inline-end: 0rem !important;
  }
  .user-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EFEFEF;
    padding: 0.75rem;

    .swiper-container {
      width: 100%;
      height: 100%;
      z-index: 0 !important;
    }
    
    .swiper-slide {
      background: #fff;
    
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }

  .user-detail-info-container {
    padding: 0.75rem;

    .name {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: lowercase;
      color: #262626;
      margin-left: 1rem;
    }
  }
  .user-detail-info-footer {
    padding: 0.75rem;
    border-bottom: 1px solid #EFEFEF;

    .info {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .likes, .name {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: lowercase;
      color: #262626;
    }

    .desc {
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.125rem;
      padding-left: 0.5rem;
    }

    .comments-text {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.125rem;;
      color: #8E8E8E;
    }

    .date {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 0.625rem;
      line-height: 1.125rem;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #8E8E8E;
    }
  }
  .comment-input-section {
    padding: 0.375rem 0.75rem 0rem 0.75rem;

    .comment-container {
      height: 2.5rem;
    }
    .comment-input {
      border: unset;
    }
    .comment-input:focus {
      box-shadow: unset;
    }
    .post-button {
      padding-right: 0.75rem;
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;;
      text-transform: capitalize;
      color: #0095F6;
      cursor: pointer;
    }
  }
`

export const Network = styled.div`
  margin: 1.5rem 0.5rem;
  .network-header {
    .userId {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: lowercase;
      color: #262626;
    }
    .username {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: capitalize;
      color: #8E8E8E;
      padding-top: 0.5rem;
    }
    .switch-button {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
      text-transform: capitalize;
      color: #0095F6;
    }
  }

  .suggestion-section {
    padding: 1.5rem 0rem;
    .suggestion-header-title {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      text-transform: capitalize;
      color: #8E8E8E;
    }

    .see-all-btn {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-transform: capitalize;
      color: #262626;
    }

    .userId {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 11px;
      text-transform: lowercase;
      color: #262626;
    }

    .status {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 11px;
      color: #8E8E8E;

      padding-top: 0.4rem;
    }

    .follow-button {
      font-family: Segoe UI;
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
      text-transform: capitalize;
      color: #0095F6;
    }
  }
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;

  .avatar-img {
    margin: auto;
    padding: 0.3rem;
    border: 2.5px solid #DE0046;
  }

  .username-text {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1rem;

    text-align: center;
    letter-spacing: 0.008rem;
    text-transform: lowercase;
  }
`
