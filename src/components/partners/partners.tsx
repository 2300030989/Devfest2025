import { MyComponent } from '@/types';
import { partnersByTypes, PartnerType } from '@/data/partners/partnersByTypes';
import React from 'react';
import { MyLink } from '@/components/commun/link';
import Image from 'next/image';
import './partners.scss';
import { Grid } from '@mui/system';

export const PartnersList: MyComponent<{ partnerType: PartnerType }> = async ({
  partnerType,
}) => {
  const partners = partnersByTypes[partnerType].filter(p => !p.hidden);

  const sizes: Record<PartnerType, { width: number; height: number }> = {
    PXL: { height: 300, width: 515 },
    Platinium: { height: 175, width: 300 },
    Gold: { height: 140, width: 200 },
    Virtual: { height: 140, width: 200 },
    Velotypie: { height: 140, width: 200 },
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems='center'
      justifyContent='center'
      columnGap='40px'
    >
      {partners.map((partner) => (
        <Grid
          key={partner.id}
          size={{ xs: 12, md: 6, lg: 5 }}
          maxWidth={500}
          style={{
            maxHeight: sizes[partnerType]?.height + 'px',
            maxWidth: sizes[partnerType]?.width + 'px',
          }}
        >
          <MyLink key={partner.id} href={partner.website}>
            <div className='image-container'>
              <Image
                className='partner-logo'
                objectFit='contain'
                layout='fill'
                alt={partner.name}
                src={partner.image.default.src}
              />
            </div>
          </MyLink>
        </Grid>
      ))}
    </Grid>
  );
};
