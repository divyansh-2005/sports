import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Sport Shoes</Text>
        <TextInput style={styles.searchBar} placeholder="Search items" />

        {/* Wishlist Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>

        {/* Cart Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Wallet and Top-up Section */}
      <View style={styles.walletSection}>
        <View style={styles.walletBalance}>
          <Text>Wallet balance</Text>
          <Text style={styles.balance}>Rp1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.topUpButton}>
          <FontAwesome name="plus" size={16} color="white" />
          <Text style={styles.topUpText}>Top up</Text>
        </TouchableOpacity>
      </View>

      {/* Discount Banner */}
      <View style={styles.banner}>
        <Text style={styles.discountText}>15% OFF</Text>
        <Text>All Items</Text>
        <Text>01/09/2023 - 30/09/2023</Text>
      </View>

      {/* Shop by Category */}
      <View style={styles.categorySection}>
        <TouchableOpacity style={styles.categoryItem}>
          <Ionicons name="ios-shirt-outline" size={40} color="black" />
          <Text>Footwear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Ionicons name="ios-bag-outline" size={40} color="black" />
          <Text>Bags</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Ionicons name="ios-pricetag-outline" size={40} color="black" />
          <Text>Apparel</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    marginLeft: 10,
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  walletBalance: {},
  balance: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  topUpText: {
    color: '#fff',
    marginLeft: 5,
  },
  banner: {
    backgroundColor: '#f5a623',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  discountText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
});
