import { Container, SuccessCard } from "./styles";
import successImg from "../../../../assets/success.png";
import { Button } from "../../../../components/button";
import { useRoutes } from "../../../../hooks/useRoutes";

export function Success() {
   const { routes } = useRoutes();

   return (
      <Container>
         <SuccessCard>
            <p>Compra realizada com sucesso!</p>
            <img src={successImg} alt="Sucesso" />
         </SuccessCard>
         <div className="containerButton">
            <Button
               label='Voltar'
               type='submit'
               width='180px'
               marginTop='32px'
               onClick={() => {
                  routes.home();
               }}
            />
         </div>
      </Container>
   );
}
