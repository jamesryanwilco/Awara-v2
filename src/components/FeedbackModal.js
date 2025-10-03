import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { COLORS, SIZES, FONTS } from '../styles/themes';

const FeedbackModal = ({ visible, onClose, shootConfetti, onConfettiComplete }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Great job!</Text>
          <Text style={styles.message}>You've earned 10 XP.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
        {shootConfetti && (
          <ConfettiCannon
            count={200}
            origin={{ x: -10, y: 0 }}
            autoStart={true}
            fadeOut
            onAnimationEnd={onConfettiComplete}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: COLORS.card,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  message: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginBottom: SIZES.padding,
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.base,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
  },
  closeButtonText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default FeedbackModal;
