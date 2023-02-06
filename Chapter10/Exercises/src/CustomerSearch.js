import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

const searchParams = (after, searchTerm) => {
  let pairs = [];
  if (after) {
    pairs.push(`after=${after}`);
  }
  if (searchTerm) {
    pairs.push(`searchTerm=${searchTerm}`);
  }
  if (pairs.length > 0) {
    return `?${pairs.join("&")}`;
  }
  return "";
};

const SearchButtons = ({
  handleNext,
  handlePrevious,
}) => (
  <menu>
    <li>
      <button onClick={handlePrevious}>
        Previous
      </button>
    </li>
    <li>
      <button onClick={handleNext}>Next</button>
    </li>
  </menu>
);

const CustomerRow = ({
  customer,
  renderCustomerActions,
}) => (
  <tr>
    <td>{customer.firstName}</td>
    <td>{customer.lastName}</td>
    <td>{customer.phoneNumber}</td>
    <td>{renderCustomerActions(customer)}</td>
  </tr>
);

export const CustomerSearch = ({
  renderCustomerActions,
}) => {
  const [customers, setCustomers] = useState([]);
  const [lastRowIds, setLastRowIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTextChanged = ({
    target: { value },
  }) => setSearchTerm(value);

  const handleNext = useCallback(() => {
    const currentLastRowId =
      customers[customers.length - 1].id;
    setLastRowIds([...lastRowIds, currentLastRowId]);
  }, [customers, lastRowIds]);

  const handlePrevious = useCallback(
    () => setLastRowIds(lastRowIds.slice(0, -1)),
    [lastRowIds]
  );

  useEffect(() => {
    const fetchData = async () => {
      const after = lastRowIds[lastRowIds.length - 1];
      const queryString = searchParams(
        after,
        searchTerm
      );

      const result = await global.fetch(
        `/customers${queryString}`,
        {
          method: "GET",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCustomers(await result.json());
    };

    fetchData();
  }, [lastRowIds, searchTerm]);

  return (
    <>
      <input
        value={searchTerm}
        onChange={handleSearchTextChanged}
        placeholder="Enter filter text"
      />
      <SearchButtons
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <CustomerRow
              customer={customer}
              key={customer.id}
              renderCustomerActions={
                renderCustomerActions
              }
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

CustomerSearch.defaultProps = {
  renderCustomerActions: () => {},
};
