import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const notifications = [
  { id: '1', title: 'Order Shipped', description: 'Your order #12345 has been shipped.' },
  { id: '2', title: 'Discount Offer', description: 'Get 20% off on your next purchase!' },
  { id: '3', title: 'New Arrivals', description: 'Check out the latest arrivals in our store.' },
  { id: '4', title: 'Profile Updated', description: 'Your profile has been successfully updated.' },
  { id: '5', title: 'New Message', description: 'You have a new message from customer support.' },
];

export default function Notification() {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
  },
});
