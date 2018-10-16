import React from 'react';

// the UI component for filtering the subway entrances by subway municipios
export default (props) => {
  const { municipioss, filterLines } = props;

  // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
  // notice in the select element onChange is set to the updateFilter method
  // thus when a user selects a new subway municipios to view, the component passes the new filter value
  // to the parent component, Map, which reloads the GeoJSON data with the current filter value

  return (

    < div className="filterMunicipios" >
      <hr />
      <h3>Municipios de CDMX</h3>
      <p>Filtrar por municipio</p>
      <select defaultValue="*"
        type="select"
        name="filtermunicipioss"
        onChange={(e) => filterLines(e)}>
        { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */}
        {
          municipioss.map((municipios, i) => {

            return (

              < option value={municipios} key={i} > {municipios}</option>
            );
          }, this)
        }
      </select>
    </div >
  );
};
