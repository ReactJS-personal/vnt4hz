export const JSparse = `
 import { useHistory } from "react-router-dom";
 import Button from '@atom/Button';

    function HomeButton() {
        let history = useHistory();
          
        function handleClick() {
          history.push("/home");
        }
        return (
          <Button type="button" onClick={handleClick}>
                Run Vdz
          </Button>
        );
      }
`;
