package org.jhipster.cashdeskservice.repository;

import org.jhipster.cashdeskservice.domain.CashBoxController;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the CashBoxController entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CashBoxControllerRepository extends JpaRepository<CashBoxController, Long> {

}
