package com.payment.paymentIntegration.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Data
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResponse {
    @Id
    @GeneratedValue(generator = "increment")
    private Long id;
    private String orderId;
    private String paymentId;
    private String paymentLinkId;
    private String paymentStatus;
    private String paymentSignature;

}
