import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
`;

const Dates = styled.p`
  margin: 0;
  color: #666;
`;

function EventList({ events }) {
  return (
    <List>
      {events.map((event) => (
        <ListItem key={event.id}>
          <Title>{event.summary}</Title>
          <Dates>{new Date(event.start.dateTime).toLocaleString()}</Dates>
        </ListItem>
      ))}
    </List>
  );
}

export default EventList;
