package com.payment.paymentIntegration.repository;

import com.payment.paymentIntegration.entity.PaymentResponse;
import org.hibernate.sql.ast.tree.expression.JdbcParameter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentResponseRepository extends JpaRepository<PaymentResponse, Long> {

    PaymentResponse findByPaymentId(String paymentId);

    PaymentResponse findByOrderId(String orderId);
}
