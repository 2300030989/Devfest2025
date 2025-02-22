import { Grid2 as Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import { MyLink } from '@/components/commun/link';
import { MyComponent } from '@/types';
import { getTranslation } from '@/i18n/i18n';

export const Tickets: MyComponent = async ({ params }) => {
  const t = await getTranslation(params, 'pages.home.tickets');
  const disabled1st = true;
  const disabled2nd = false;

  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={3}
      margin='20px 0'
      justifyContent='center'
      className='tickets'
    >
      <Ticket
        label={t('2days-1st')}
        price={110}
        quantity={1200}
        disabled={disabled1st}
        date='06/06/2024 11h'
      />
      <Ticket
        label={t('2days-2nd')}
        price={110}
        quantity={900}
        disabled={disabled2nd}
        date='05/09/2024 23h55'
      />
      <Ticket
        label={t('1day')}
        price={70}
        quantity={500}
        disabled={disabled2nd}
        date='05/09/2024 23h55'
      />
    </Grid>
  );
};

const Ticket: React.FC<{
  price: number;
  label: string;
  date: string;
  quantity: number;
  disabled: boolean;
}> = ({ label, price, quantity, disabled, date }) => {
  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
      }}
    >
      <MyLink
        href='https://www.billetweb.fr/billet-devfest-nantes-2025'
        style={{ cursor: 'default' }}
      >
        <div className={classNames('ticket', disabled && 'disabled')}>
          <div className='ticket-wrapper'>
            <div className='ticket-body'>
              <div className='price'>
                <Typography variant='h2'>
                  {price} € <span style={{ fontSize: '8px' }}>HT</span>
                </Typography>
                <hr />
              </div>
              <div className='description'>
                <p className='label'>{label}</p>
                <p className='quantity'>{quantity} places</p>
                <p className='date'>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </MyLink>
    </Grid>
  );
};
