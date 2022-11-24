export const JSparse = `
 import { useHistory } from "react-router-dom";
 import Button from '@atom/Button';

    function HomeButton() {
        let history = useHistory();
          
        function handleClick() {
          history.push("/VDZ-PAGE");
        }
        return (
          <Button type="button" onClick={handleClick}>
                RUN CODE 🤖
          </Button>
        );
      }
`;

export const SCSSparse = `
  $bgBtn:  linear-gradient(90deg, #e55d87 0, #5fc3e4 51%, #e55d87)
  $color-main: #fff;
      
    .btnRun {
       background-image: $bgBtn;
       padding: 10px 45px;
       color: $color-main;
       font-size: 1rem;
    }
    .load {
       animation-duration: 500ms;
    }
`;
