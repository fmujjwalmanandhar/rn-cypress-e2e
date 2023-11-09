import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

export default function App() {
  const [isLoading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);

  //https://jsonplaceholder.cypress.io/users
  const fetchUsers = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const _onPress = (id) => () => {
    console.log({ id });
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator testID="loader" />
      ) : (
        <FlatList
          style={{ textAlign: "center", width: "100%" }}
          accessibilityLabel="user"
          data={users}
          renderItem={({ item, index }) => (
            <Pressable onPress={_onPress(item.id)}>
              <Text
                style={{ marginBottom: 20, fontSize: 16 }}
                testID={`user-${item.id}`}
              >
                {index + 1}. {item.first_name}, {item.email}
              </Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
