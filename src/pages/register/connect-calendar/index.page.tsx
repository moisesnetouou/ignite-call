import { Button, Heading, MultiStep, Text } from '@ignite-uou-ui/react'
import { ArrowRight } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'

import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  const session = useSession()

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calenário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          <Button variant="secondary" onClick={() => signIn('google')}>
            Conectar <ArrowRight />
          </Button>
        </ConnectItem>

        <Text>{JSON.stringify(session.data)}</Text>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
