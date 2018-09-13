package org.jhipster.cashdeskservice.repository;

import org.jhipster.cashdeskservice.domain.CashBox;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the CashBox entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CashBoxRepository extends JpaRepository<CashBox, Long> {

}
