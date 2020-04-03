import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ServiceCard from "./ServiceCard"
import { Container, Content, HeaderContent, ServicesContent } from "./styles"

export default function Services() {
  const {
    allServicesJson: { nodes: services },
  } = useStaticQuery(graphql`
    {
      allServicesJson {
        nodes {
          id
          name
          topics
          image {
            src
            referral
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Content>
        <HeaderContent>
          <h2>Conheça nossos serviços</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            molestiae blanditiis quibusdam cumque obcaecati quia consequatur
            possimus sed saepe! Similique.
          </p>
        </HeaderContent>

        <ServicesContent>
          {services.map(service => (
            <ServiceCard
              key={service.id}
              name={service.name}
              topics={service.topics}
              imageSrc={service.image.src}
              imageReferral={service.image.referral}
            />
          ))}
        </ServicesContent>
      </Content>
    </Container>
  )
}
