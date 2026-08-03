'use client';

import { Stack } from '@mui/material';
import {
  FooterRoot,
  FooterContainer,
  FooterGrid,
  BrandTitle,
  BrandDescription,
  ColumnHeading,
  LinkItem,
  FooterDivider,
  Copyright,
} from './styles';

console.log({ FooterRoot, FooterContainer, FooterGrid, BrandTitle, BrandDescription, ColumnHeading, LinkItem, FooterDivider, Copyright });

const COMPANY_LINKS = ['About Us', 'Our Story', 'Contact Us', 'FAQs'];
const SHOP_LINKS = ['Boozy Coffee', 'Eternal Rose', 'Midnight Chocolate'];
const SOCIAL_LINKS = ['Instagram', 'Facebook'];

export default function Footer() {
  return (
    <FooterRoot>
      <FooterContainer>
        <FooterGrid>
          {/* Brand */}
          <Stack spacing={2}>
            <BrandTitle>Bloomifier</BrandTitle>
            <BrandDescription>
              Beautiful aroma diffusers crafted to use iconic scents to bloomify your home!
            </BrandDescription>
          </Stack>

          {/* Company */}
          <Stack spacing={1.5}>
            <ColumnHeading>Company</ColumnHeading>
            {COMPANY_LINKS.map((item) => (
              <LinkItem key={item}>{item}</LinkItem>
            ))}
          </Stack>

          {/* Shop */}
          <Stack spacing={1.5}>
            <ColumnHeading>Shop</ColumnHeading>
            {SHOP_LINKS.map((item) => (
              <LinkItem key={item}>{item}</LinkItem>
            ))}
          </Stack>

          {/* Follow Us */}
          <Stack spacing={1.5}>
            <ColumnHeading>Follow Us</ColumnHeading>
            {SOCIAL_LINKS.map((item) => (
              <LinkItem key={item}>{item}</LinkItem>
            ))}
          </Stack>
        </FooterGrid>

        <FooterDivider />

        <Copyright>© {new Date().getFullYear()} Bloomifier. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterRoot>
  );
}
