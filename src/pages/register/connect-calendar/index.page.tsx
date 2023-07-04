import { Heading, MultiStep, Button, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRight, Check } from "phosphor-react";

import { Container, Header } from "../styles";
import { AuthError, ConnectBox, ConnectItem } from "./styles";

const ConnectCalendar = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  const hasAuthError = !!router.query.error;
  const isSignedIn = status === "authenticated";

  const handleSignIn = async () => {
    await signIn("google");
  };

  console.log(session);

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button variant="secondary" size="sm" disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button onClick={handleSignIn} variant="secondary" size="sm">
              Conectar <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && !isSignedIn && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
};

export default ConnectCalendar;
