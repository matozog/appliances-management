package com.matozog.vmapp;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.matozog.vmapp");

        noClasses()
            .that()
            .resideInAnyPackage("com.matozog.vmapp.service..")
            .or()
            .resideInAnyPackage("com.matozog.vmapp.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.matozog.vmapp.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
