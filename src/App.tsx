import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

registerAllModules();

export function App() {
  return (
    <HotTable
      licenseKey="non-commercial-and-evaluation"
      data={[
        ['Mercedes', 'A 160', '14/01/2021', 6999.95],
        ['Citroen', 'C4 Coupe', '12/01/2022', 8330],
        ['Audi', 'A4 Avant', '19/11/2023', 33900],
        ['Opel', 'Astra', '02/02/2021', 7000],
        ['BMW', '320i Coupe', '24/07/2022', 30500]
      ]}
      colHeaders={['Car', 'Model', 'Registration date', 'Price']}
      height="auto"
      columns={[
        {
          type: 'text',
        },
        {
          // 2nd cell is simple text, no special options here
        },
        {
          type: 'date',
          dateFormat: 'DD/MM/YYYY',
          correctFormat: true,
          defaultDate: '01/01/1900',
          // datePicker additional options
          // (see https://github.com/dbushell/Pikaday#configuration)
          datePickerConfig: {
            // First day of the week (0: Sunday, 1: Monday, etc)
            firstDay: 1,
            //  showWeekNumber: true
          },
        },
        {
          type: 'numeric',
          numericFormat: {
            pattern: '$ 0,0.00',
          },
        },
      ]}
    />
  );
}
