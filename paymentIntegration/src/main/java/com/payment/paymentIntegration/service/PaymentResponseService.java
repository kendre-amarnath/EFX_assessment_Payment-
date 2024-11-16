// PaymentResponseService.java
package com.payment.paymentIntegration.service;

import com.payment.paymentIntegration.entity.PaymentResponse;
import com.payment.paymentIntegration.repository.PaymentResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentResponseService {

    @Autowired
    private PaymentResponseRepository paymentResponseRepository;

    public PaymentResponse setPaymentDetails(PaymentResponse paymentResponse) {
        return paymentResponseRepository.save(paymentResponse);
    }

    public List<PaymentResponse> getAllPaymentDetails() {
        return paymentResponseRepository.findAll();
    }

    public Optional<PaymentResponse> getPaymentDetailsByOrderId(String orderId) {
        return paymentResponseRepository.findById(Long.valueOf(orderId));
    }

    public Optional<PaymentResponse> getPaymentDetailsByPaymentId(String paymentId) {
        return Optional.ofNullable(paymentResponseRepository.findByPaymentId(paymentId));
    }
}
