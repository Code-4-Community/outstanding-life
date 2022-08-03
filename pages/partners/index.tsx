import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Header from '../../lib/components/header';

const partnersData: PartnersListingProps[] = [
  {
    name: 'MA Council on Aging',
    imageSrc: '/coa.png',
    imageHeight: '132.4px',
    url: 'https://mcoaonline.com/',
  },
  {
    name: 'Multicultural AIDS Coalition',
    imageSrc: '/mac.png',
    imageHeight: '155px',
    url: 'https://www.mac-boston.org/',
  },
  {
    name: 'Code4Community Northeastern University',
    imageSrc: '/c4c.png',
    imageHeight: '251px',
    url: 'https://c4cneu.com/',
  },
  {
    name: 'Little Brothers Friends Of The Elderly',
    imageSrc: '/lbfe.png',
    imageHeight: '265px',
    url: 'https://lbfeboston.org/',
  },
  {
    name: 'FriendshipWorks',
    imageSrc: '/fw.jpeg',
    imageHeight: '75px',
    url: 'https://fw4elders.org/',
  },
  {
    name: 'Age Strong Commission',
    imageSrc: '/asc.png',
    imageHeight: '110.5px',
    url: 'https://www.boston.gov/departments/age-strong-commission',
  },
  {
    name: 'LGBTQ Senior Housing',
    imageSrc: '/sh.jpeg',
    imageHeight: '362px',
    url: 'https://www.lgbtqseniorhousing.org/',
  },
  {
    name: 'The Equality Fund',
    imageSrc: '/ef.jpg',
    imageHeight: '58px',
    url: 'https://www.tbf.org/nonprofits/grant-making-initiatives/equality-fund',
  },
  {
    name: 'LGBTQIA+ Aging Project',
    imageSrc: '/lap.png',
    imageHeight: '78px',
    url: 'https://fenwayhealth.org/the-fenway-institute/lgbtqia-aging-project/',
  },
  {
    name: 'Springwell',
    imageSrc: '/sw.png',
    imageHeight: '83px',
    url: 'https://springwell.com/',
  },
];

interface PartnersListingProps {
  name: string;
  imageSrc: string;
  imageHeight: string;
  url: string;
}

const PartnersListing: React.FC<PartnersListingProps> = ({ name, imageSrc, imageHeight, url }) => {
  return (
    <Flex
      direction="column"
      textAlign="center"
      w="360px"
      m="30px 20px"
      onClick={() => {
        window.open(url);
      }}
      cursor="pointer">
      <Image src={imageSrc} layout="fixed" height={imageHeight} width="360px" />
      <Box bg={'var(--magenta)'} mt="16px" h="4px" w="100%" />
      <Text fontWeight="bolder">{name}</Text>
    </Flex>
  );
};

const Partners: React.FC<{}> = () => {
  return (
    <Container maxW={'container.lg'} mb="80px" fontSize="24px" mt="50px" justifyContent="center">
      <div data-cy="partners-header">
        <Flex direction="column" mb="25px">
          <Header header="Our Partners" />
          <Text mt="32px">
            We are grateful to many people who are working with us to create OUTstandingLIFE. In
            addition to our volunteers, we would like to thank the following organizations who are
            key to making OUTstandingLIFE a reality.
          </Text>
        </Flex>
      </div>

      <div data-cy="partners-logos">
        <Flex wrap="wrap" direction="row" justifyContent="space-around">
          {partnersData.map((partner: PartnersListingProps, index: number) => (
            <Flex key={index} direction="column" justifyContent="flex-end" mb="25px">
              <PartnersListing {...partner} />
            </Flex>
          ))}
        </Flex>
      </div>

      <div data-cy="partners-footer">
        <Text mt="32px" textAlign="center">
          A big thank you to The Equality Fund at The Boston Foundation which has awarded us a
          $10,000 grant to help us move forward. Thank you!
        </Text>
      </div>
    </Container>
  );
};

export default Partners;
