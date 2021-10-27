/* eslint-disable prettier/prettier */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash/fp';
import { Control, Controller } from 'react-hook-form';

import { countriesPtBR } from './countries_pt.BR';

interface CountryProps {
  code: string;
  label: string;
  phone: string;
}

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode.toUpperCase().replace(/./g, (char) =>
      String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const countries = countriesPtBR;

export default function CountrySelect({
  control,
}: {
  control: Control;
}): JSX.Element {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={countries}
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          getOptionSelected={(option: CountryProps, value: CountryProps) =>
            _.isEqual(option, value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
          // eslint-disable-next-line no-shadow
          onChange={(_, data) => field.onChange(data)}
        />
      )}
      name="country"
      control={control}
    />
  );
}
