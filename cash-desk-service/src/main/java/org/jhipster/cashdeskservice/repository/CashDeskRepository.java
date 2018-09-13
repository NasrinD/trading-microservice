package org.jhipster.cashdeskservice.repository;

import org.jhipster.cashdeskservice.domain.CashDesk;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the CashDesk entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CashDeskRepository extends JpaRepository<CashDesk, Long> {

}
