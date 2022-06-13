import styled from "styled-components";

export const Container = styled.div`
  overflow:hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  img {
    opacity: 0.2;
  }
`;

export const Logo = styled.div`
  position: absolute;
    left: 40px;
    top: 25px;
    z-index: 100;
    img {
      width:175px
    }
`;

export const Content = styled.div`
  position: absolute;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: rgba(0,0,0,0.8);
  max-width: 450px;
  padding: 50px 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;