import { Heading, Text } from "@ignite-ui/react";
import Image from "next/image";

import PreviewImage from "@/pages/assets/app-preview.png";

import { ClaimUsernameForm } from "./components/ClaimUsernameForm/ClaimUsernameForm";
import { Container, Hero, Preview } from "./styles";

const Home = () => {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={PreviewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  );
};

export default Home;
